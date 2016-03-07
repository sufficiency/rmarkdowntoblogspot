<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/cerulean/bootstrap.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
<!--
<script src="http://www.htmlwidgets.org/libs/htmlwidgets/htmlwidgets.js"></script>
-->
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>


<script>
                HTMLWidgets.widget({
                  name: "plotly",
                  type: "output",
                  
                  initialize: function(el, width, height){
                    return {};
                  },
                  
                  resize: function(el, width, height, instance) {
                    Plotly.relayout(el.id, {width: width, height: height});
                  },  
                  
                  renderValue: function(el, x, instance) {
                    // make sure plots don't get created outside the network
    window.PLOTLYENV = window.PLOTLYENV || {};
    window.PLOTLYENV.BASE_URL = x.base_url;
    
    // if no plot exists yet, create one with a particular configuration
    if (!instance.plotly) {
      Plotly.plot(el.id, x.data, x.layout, x.config);
      instance.plotly = true;
    } else {
      Plotly.newPlot(el.id, x.data, x.layout);
    }
  }
  
});
</script>
