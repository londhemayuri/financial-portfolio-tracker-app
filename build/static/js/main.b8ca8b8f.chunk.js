(this["webpackJsonpfinancial-portfolio-tracker-app"]=this["webpackJsonpfinancial-portfolio-tracker-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),r=a.n(c),o=a(3),s=a(4),i=a(6),u=a(5),m=a(7);a(24),a(25);var d=function(){return l.a.createElement("nav",null,l.a.createElement("h1",null,"Finance Portfolio Tracker"))},h=(a(26),a(2)),p=a.n(h),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={cPrice:null,margin:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.symbol,a=this.props.date,n=this.props.buyprice,l=this.props.share;p.a.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(t,"&outputsize=compact&apikey=908SPI8GT8SQQPN8")).then((function(t){var c=t.data["Time Series (Daily)"][a]["4. close"],r=(c-n)*l;r=+r.toFixed(2),e.setState({cPrice:c,margin:r}),console.log(c+"  ")})).catch((function(e){alert('API CALL ERROR, Please Try with different "Buy Date" or Wait for sometime and Try again.')}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("td",null,this.state.cPrice),l.a.createElement("td",null,this.state.margin))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],count:null},a.handleDelete=function(e){console.log(e.target.id+" button");var t=e.target.id;p.a.delete("https://fptracker-a11c9.firebaseio.com/active/".concat(t,".json")),p.a.post("https://fptracker-a11c9.firebaseio.com/allStocks.json",{symbol:a.state.data[t].symbol,name:a.state.data[t].name})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://fptracker-a11c9.firebaseio.com/active.json").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"componentWillUpdate",value:function(){var e=this;p.a.get("https://fptracker-a11c9.firebaseio.com/active.json").then((function(t){var a=t.data,n=0;null!=a&&(n=Object.keys(a).length),e.setState({data:a,count:n})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"MyStocks",id:"mystocks"},l.a.createElement("h2",null,"My Stocks"),l.a.createElement("table",{className:"MyStocksTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Stock Symbol"),l.a.createElement("th",null,"Stock Name"),l.a.createElement("th",null,"No. of shares"),l.a.createElement("th",null,"Buy price"),l.a.createElement("th",null,"Current price"),l.a.createElement("th",null,"Profit/Loss"),l.a.createElement("th",null," "))),l.a.createElement("tbody",null,null==this.state.data?l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h3",null,"NO STOCKS HAVE BEEN SELECTED"))):Object.keys(this.state.data).map((function(t){return l.a.createElement("tr",{key:t,id:t},l.a.createElement("td",null,e.state.data[t].symbol),l.a.createElement("td",null,e.state.data[t].name),l.a.createElement("td",null,e.state.data[t].share),l.a.createElement("td",null,e.state.data[t].buyprice),l.a.createElement(f,{symbol:e.state.data[t].symbol,date:e.state.data[t].date,buyprice:e.state.data[t].buyprice,share:e.state.data[t].share}),l.a.createElement("td",null,l.a.createElement("button",{className:"StopTrackingBtn",id:t,onClick:e.handleDelete},"Stop Tracking")))})))),this.state.count>5&&l.a.createElement("h3",null,"WARNING, Table should contain not more than 5 Stocks!"))}}]),t}(n.Component),E=a(18),b=(a(44),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],show:!1,name:"",symbol:"",id:"",share:"",buyprice:"",date:""},a.showModal=function(e){a.setState({name:e.target.name,symbol:e.target.innerHTML,id:e.target.id,show:!0}),console.log("show modal called:  "+e.target.id)},a.hideModal=function(){a.setState({show:!1})},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.postData=function(e){e.preventDefault();var t=e.target.id;console.log("button is id"+t);var n,l=new Date(a.state.date);6===l.getDay()?(l.setDate(l.getDate()-1),n=(n=l.toISOString()).slice(0,10),alert("The date for Saturday change to Friday")):0===l.getDay()?(l.setDate(l.getDate()-2),n=(n=l.toISOString()).slice(0,10),alert("The date for Sunday change to Friday")):n=(n=l.toISOString()).slice(0,10),p.a.post("https://fptracker-a11c9.firebaseio.com/active.json",{symbol:a.state.symbol,name:a.state.name,share:a.state.share,buyprice:a.state.buyprice,date:n}).then((function(e){document.querySelector('form[name="formdata"]').reset()})).catch((function(e){console.log(e)})),a.setState({show:!1}),p.a.delete("https://fptracker-a11c9.firebaseio.com/allStocks/".concat(t,".json"))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://fptracker-a11c9.firebaseio.com/allStocks.json").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"componentWillUpdate",value:function(){var e=this;p.a.get("https://fptracker-a11c9.firebaseio.com/allStocks.json").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"AddStocksTitle",id:"addstocks"},l.a.createElement("h2",null,"Add Stocks to my Stocks"),null==this.state.data?l.a.createElement("h3",null,"ALL STOCKS ADDED"):Object.keys(this.state.data).map((function(t){return l.a.createElement("div",{key:t},l.a.createElement("button",{className:"StockButton",id:t,onClick:e.showModal,name:e.state.data[t].name},e.state.data[t].symbol),l.a.createElement("span",null,e.state.data[t].name))}))),l.a.createElement("div",{id:"myModal",className:"modal",style:{display:this.state.show?"block":"none"}},l.a.createElement("div",{className:"modal-content"},l.a.createElement("span",{className:"close",onClick:this.hideModal},"\xd7"),l.a.createElement("h3",null,"Add ",this.state.name," to my Stocks"),l.a.createElement("form",{id:this.state.id,name:"formdata",onSubmit:this.postData},l.a.createElement("div",{className:"modal-input"},l.a.createElement("div",null,l.a.createElement("p",null,"Compnay Name:"),l.a.createElement("span",null,this.state.name)),l.a.createElement("div",null,l.a.createElement("p",null,"No. of Shares: "),l.a.createElement("input",{id:"noShares",type:"number",placeholder:"No. of Shares",name:"share",onChange:function(t){e.handleChange(t)},required:!0})),l.a.createElement("div",null,l.a.createElement("p",null,"Buy Price:"),l.a.createElement("input",{id:"buyPrice",type:"number",placeholder:"Buying Price",name:"buyprice",onChange:function(t){e.handleChange(t)},required:!0})),l.a.createElement("div",null,l.a.createElement("p",null,"Buy Date:"),l.a.createElement("input",{id:"buyDate",type:"date",name:"date",onChange:function(t){e.handleChange(t)},required:!0}))),l.a.createElement("div",{className:"modal-button"},l.a.createElement("div",null,l.a.createElement("button",{className:"AddButton",type:"submit"},"Add")))))))}}]),t}(n.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(y,null),l.a.createElement(b,null))}}]),t}(n.Component);r.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b8ca8b8f.chunk.js.map