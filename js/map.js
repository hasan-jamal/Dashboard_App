$(function () {
  Highcharts.setOptions({
    colors: ["#638F61"],
    chart: {
      style: {
        fontFamily: "sans-serif",
        color: "#000",
      },
    },
  });
  $("#container").highcharts({
    chart: {
      type: "column",
      backgroundColor: "#fff",
    },
    title: {
      text: "",
      style: {
        color: "#000",
      },
    },
    xAxis: {
      tickWidth: 0,
      labels: {
        style: {
          color: "#000",
        },
      },
      categories: [
        "يناير",
        "فبراير",
        "مارس",
        "ابريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
    },
    yAxis: {
      gridLineWidth: 0.5,
      gridLineDashStyle: "dash",
      gridLineColor: "black",
      title: {
        text: "",
        style: {
          color: "#000",
        },
      },
      labels: {
        formatter: function () {
          return "" + Highcharts.numberFormat(this.value, 0, "", ",");
        },
        style: {
          color: "#000",
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      valuePrefix: "",
    },
    plotOptions: {
      column: {
        borderRadius: 2,
        pointPadding: 0,
        groupPadding: 0.1,
      },
    },
    series: [
      {
        name: "Revenue",
        data: [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0],
      },
    ],
  });
});
