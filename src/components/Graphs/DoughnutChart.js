import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {

 const data = {...}

 const options = {  }

 const plugins = [{
     beforeDraw: function(chart) {
      var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
          ctx.restore();
          var fontSize = (height / 160).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "top";
          var text = "Foo-bar",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
     } 
   }]



  return (
   
        <Doughnut 
          type="doughnut" 
          data={data} 
          options{options} 
          plugins={plugins} 
         />
  );
}

export default DoughnutChart;