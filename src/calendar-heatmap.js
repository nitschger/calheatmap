
function calendarHeatmap() {
  // defaults
  var width = 1500;
  var height = 300;
  var legendWidth = 300;
  var selector = 'body';
  var SQUARE_LENGTH = 22;
  var SQUARE_PADDING = 2;
  var MONTH_LABEL_PADDING = 6;
  var LEGEND_X_OFFSET = 90;
  var LEGEND_Y_OFFSET = 50;
  var now = moment('2019-01.31').startOf('day').toDate();
  var yearAgo = moment('2019-01-01').startOf('day').subtract(1, 'year').toDate();
  var startDate = null;
  var counterMap= {};
  var data = [];
  var max = null;
  var colorRange = ['#EB0000','#8594AE'];
  var tooltipEnabled = true;
  var tooltipUnit = 'Sekunde';
  var tooltipUnitMin = 'Minute';
  var legendEnabled = true;
  var onClick = null;
  var weekStart = 0; //0 for Sunday, 1 for Monday
  var locale = {
    months: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    days: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    No: 'Keine',
    on: 'am',
    Less: 'Pünktlich',
    More: 'Unpünktlich'
  };
  var v = Number(d3.version.split('.')[0]);

  // setters and getters
  chart.data = function (value) {
    if (!arguments.length) { return data; }
    data = value;

    counterMap= {};

    data.forEach(function (element, index) {
        var key= moment(element.date).format( 'YYYY-MM-DD' );
        var counter= counterMap[key] || 0;
        counterMap[key]= counter + element.count;
    });

    return chart;
  };

  chart.max = function (value) {
    if (!arguments.length) { return max; }
    max = value;
    return chart;
  };

  chart.selector = function (value) {
    if (!arguments.length) { return selector; }
    selector = value;
    return chart;
  };

  chart.startDate = function (value) {
    if (!arguments.length) { return startDate; }
    yearAgo = value;
    now = moment(value).endOf('day').add(1, 'year').toDate();
    return chart;
  };

  chart.colorRange = function (value) {
    if (!arguments.length) { return colorRange; }
    colorRange = value;
    return chart;
  };

  chart.tooltipEnabled = function (value) {
    if (!arguments.length) { return tooltipEnabled; }
    tooltipEnabled = value;
    return chart;
  };

  chart.tooltipUnit = function (value) {
    if (!arguments.length) { return tooltipUnit; }
    tooltipUnit = value;
    return chart;
  };

  chart.legendEnabled = function (value) {
    if (!arguments.length) { return legendEnabled; }
    legendEnabled = value;
    return chart;
  };

  chart.onClick = function (value) {
    if (!arguments.length) { return onClick(); }
    onClick = value;
    return chart;
  };

  chart.locale = function (value) {
    if (!arguments.length) { return locale; }
    locale = value;
    return chart;
  };

  function chart() {

    d3.select(chart.selector()).selectAll('svg.calendar-heatmap').remove(); // remove the existing chart, if it exists

    var dateRange = ((d3.time && d3.time.days) || d3.timeDays)(yearAgo, now); // generates an array of date objects within the specified range
    var monthRange = ((d3.time && d3.time.months) || d3.timeMonths)(moment(yearAgo).startOf('month').toDate(), now); // it ignores the first month if the 1st date is after the start of the month
    var firstDate = moment(dateRange[0]);
    if (chart.data().length == 0) {
      max = 0;
    } else if (max === null) {
      max = d3.max(chart.data(), function (d) { return d.count; }); // max data value
    }

    // color range
    var color = ((d3.scale && d3.scale.linear) || d3.scaleLinear)()
      .range(chart.colorRange())
      .domain([0, max]);

    var tooltip;
    var dayRects;

    drawChart();

    function drawChart() {
      var svg = d3.select(chart.selector())
        .style('position', 'relative')
        .append('svg')
        .attr('width', width)
        .attr('class', 'calendar-heatmap')
        .attr('height', height)
        .style('padding', '36px');

      dayRects = svg.selectAll('.day-cell')
        .data(dateRange);  //  array of days for the last yr

      var enterSelection = dayRects.enter().append('rect')
        .attr('class', 'day-cell')
        .attr('width', SQUARE_LENGTH)
        .attr('height', SQUARE_LENGTH)
        .attr('fill', function(d) { return color(countForDate(d)); })
        .attr('x', function (d, i) {
          var cellDate = moment(d);
          var result = cellDate.week() - firstDate.week() + (firstDate.weeksInYear() * (cellDate.weekYear() - firstDate.weekYear()));
          return result * (SQUARE_LENGTH + SQUARE_PADDING) + 30;
        })
        .attr('y', function (d, i) {
          return MONTH_LABEL_PADDING + formatWeekday(d.getDay()) * (SQUARE_LENGTH + SQUARE_PADDING) +10;
        });

      if (typeof onClick === 'function') {
        (v === 3 ? enterSelection : enterSelection.merge(dayRects)).on('click', function(d) {
          var count = countForDate(d);
          onClick({ date: d, count: count});
        });
      }

      if (chart.tooltipEnabled()) {
        (v === 3 ? enterSelection : enterSelection.merge(dayRects)).on('mouseover', function(d, i) {
          tooltip = d3.select(chart.selector())
            .append('div')
            .attr('class', 'day-cell-tooltip')
            .html(tooltipHTMLForDate(d))
            .style('left', function () { return Math.floor(i / 7) * SQUARE_LENGTH + 'px'; })
            .style('top', function () {
              return formatWeekday(d.getDay()) * (SQUARE_LENGTH + SQUARE_PADDING) + MONTH_LABEL_PADDING * 2 + 10 + 'px';
            });
        })
        .on('mouseout', function (d, i) {
          tooltip.remove();
        });
      }

      if (chart.legendEnabled()) {
        var colorRange = [color(0)];
        for (var i = 3; i > 0; i--) {
          colorRange.push(color(max / i));
        }

        var legendGroup = svg.append('g');
        legendGroup.selectAll('.calendar-heatmap-legend')
            .data(colorRange)
            .enter()
          .append('rect')
            .attr('class', 'calendar-heatmap-legend')
            .attr('width', SQUARE_LENGTH)
            .attr('height', SQUARE_LENGTH)
            .attr('x', function (d, i) { return (width - legendWidth) + (i + 1) * (SQUARE_LENGTH + SQUARE_PADDING) - LEGEND_X_OFFSET; })
            .attr('y', height + SQUARE_PADDING - LEGEND_Y_OFFSET)
            .attr('fill', function (d) { return d; });

        legendGroup.append('text')
          .attr('class', 'calendar-heatmap-legend-text calendar-heatmap-legend-text-less')
          .attr('x', width - legendWidth - (SQUARE_LENGTH + SQUARE_PADDING) - LEGEND_X_OFFSET - 22)
          .attr('y', height + SQUARE_LENGTH  - LEGEND_Y_OFFSET)
          .text(locale.Less);

        legendGroup.append('text')
          .attr('class', 'calendar-heatmap-legend-text calendar-heatmap-legend-text-more')
          .attr('x', (width - legendWidth + SQUARE_PADDING) + (colorRange.length + 1) * (SQUARE_LENGTH + SQUARE_PADDING) - LEGEND_X_OFFSET)
          .attr('y', height + SQUARE_LENGTH  - LEGEND_Y_OFFSET)
          .text(locale.More);
      }

      dayRects.exit().remove();
      var monthLabels = svg.selectAll('.month')
          .data(monthRange)
          .enter().append('text')
          .attr('class', 'month-name')
          .text(function (d) {
            return locale.months[d.getMonth()];
          })
          .attr('x', function (d, i) {
            var matchIndex = 0;
            dateRange.find(function (element, index) {
              matchIndex = index;
              return moment(d).isSame(element, 'month') && moment(d).isSame(element, 'year');
            });

            return Math.floor(matchIndex / 7) * (SQUARE_LENGTH + SQUARE_PADDING) + 54;
          })
          .attr('y', 12);  // fix these to the top

      locale.days.forEach(function (day, index) {
        index = formatWeekday(index);
        svg.append('text')
          .attr('class', 'day-initial')
          .attr('transform', 'translate(10,' + ((SQUARE_LENGTH + SQUARE_PADDING) * (index + 1) + 10 )+ ')')
          .style('text-anchor', 'middle')
          .attr('dy', '2')
          .text(day);
      });
    }

    function pluralizedTooltipUnit (count, isMin) {
      if ('string' === typeof tooltipUnit || 'string' === typeof tooltipUnitMin) {
        if(isMin === true){
          return (tooltipUnitMin + (count === 1 ? '' : 'n'));
        }else{
          return (tooltipUnit + (count === 1 ? '' : 'n'));
        }
      }
      for (var i in tooltipUnit) {
        var _rule = tooltipUnit[i];
        var _min = _rule.min;
        var _max = _rule.max || _rule.min;
        _max = _max === 'Infinity' ? Infinity : _max;
        if (count >= _min && count <= _max) {
          return _rule.unit;
        }
      }
    }

    function tooltipHTMLForDate(d) {
      var dateStr = moment(d).format('DD.MM.YYYY');
      var count = countForDate(d);
      if(moment(d).day() == 6 || moment(d).day() == 0){
        return '<span><strong>Am Wochenende (' + dateStr + ') blieb Jakob zu Hause.</strong> ' + '</span>';
      }else if(count === "0NA"){
        return '<span><strong>Am ' + dateStr + ' fiel der Zug aus - mist.</strong> ' + '</span>';
      }else{
        return '<span><strong>' + (count ? calculateMinutes(count) : locale.No) + ' Verspätung ' + '</strong> ' + locale.on + ' ' + dateStr + '</span>';
      }
    }

    function calculateMinutes(count){
      var seconds = count % 60;
      var minutes = Math.floor(count / 60);
      return (minutes ? minutes + " " + pluralizedTooltipUnit(minutes, true) : "") + " " + seconds + " " + pluralizedTooltipUnit(seconds)
    }

    function countForDate(d) {
        var key= moment(d).format( 'YYYY-MM-DD' );
        if(moment(key).day() == 6 || moment(key).day() == 0){
          return 'NA';
        }
        return counterMap[key] || 0;
    }

    function formatWeekday(weekDay) {
      if (weekStart === 1) {
        if (weekDay === 0) {
          return 6;
        } else {
          return weekDay - 1;
        }
      }
      return weekDay;
    }

    var daysOfChart = chart.data().map(function (day) {
      return day.date.toDateString();
    });

  }

  return chart;
}


// polyfill for Array.find() method
/* jshint ignore:start */
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}
/* jshint ignore:end */
