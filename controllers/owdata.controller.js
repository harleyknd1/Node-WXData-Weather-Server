const ApiError = require('../objects/ApiError')
const assert = require('assert')
var json2xml = require('json2xml');

module.exports = {
    getWeatherData(req, res, next){
        console.log(req);
        console.log(req.params);
        let parameters = req.params.parameters;
        let queryParameters = req.query;
        console.log(parameters);

          res.type('application/xml');
          res.send('<weather ver="2.0"> <head> <locale>en_US</locale> <form>MEDIUM</form> <ut>C</ut> <ud>km</ud> <us>km/h</us> <up>mb</up> <ur>mm</ur> </head> <loc id="27516"> <dnam>Chapel Hill, NC (27516)</dnam> <tm>1:02 AM</tm> <lat>35.92</lat> <lon>-79.12</lon> <sunr>6:54 AM</sunr> <suns>5:09 PM</suns> <zone>-5</zone> </loc> <cc> <lsup>11/16/14 12:45 AM EST</lsup> <obst>Carrboro, NC, US</obst> <tmp>-3</tmp> <flik>-3</flik> <t>Clear</t> <icon>31</icon> <bar> <r>1028.78</r> <d>steady</d> </bar> <wind> <s>calm</s> <gust>N/A</gust> <d>0</d> <t>CALM</t> </wind> <hmid>70</hmid> <vis>16.1</vis> <uv> <i>0</i> <t>Low</t> </uv> <dewp>-7</dewp> <moon> <icon>23</icon> <t>Waning Crescent</t> </moon> </cc> <dayf> <lsup>11/15/14 7:00 AM EST</lsup> <day d="0" t="Sunday" dt="Nov 16"> <hi>-3</hi> <low>-1</low> <sunr>6:54 AM</sunr> <suns>5:09 PM</suns> <part p="d"> <icon>44</icon> <t>Not Available</t> <wind> <s>calm</s> <gust>N/A</gust> <d>360</d> <t>CALM</t> </wind> <bt>N/A</bt> <ppcp>0</ppcp> <hmid>0</hmid> </part> <part p="n"> <icon>29</icon> <t>Partly Cloudy</t> <wind> <s>1</s> <gust>N/A</gust> <d>112</d> <t>ESE</t> </wind> <bt>P Cloudy</bt> <ppcp>0</ppcp> <hmid>71</hmid> </part> </day><day d="1" t="Monday" dt="Nov 17"> <hi>11</hi> <low>6</low> <sunr>6:54 AM</sunr> <suns>5:09 PM</suns> <part p="d"> <icon>28</icon> <t>Mostly Cloudy</t> <wind> <s>4</s> <gust>N/A</gust> <d>150</d> <t>SSE</t> </wind> <bt>M Cloudy</bt> <ppcp>20</ppcp> <hmid>52</hmid> </part> <part p="n"> <icon>11</icon> <t>Showers</t> <wind> <s>6</s> <gust>N/A</gust> <d>110</d> <t>ESE</t> </wind> <bt>Showers</bt> <ppcp>40</ppcp> <hmid>88</hmid> </part> </day><day d="2" t="Tuesday" dt="Nov 18"> <hi>18</hi> <low>-1</low> <sunr>6:54 AM</sunr> <suns>5:09 PM</suns> <part p="d"> <icon>4</icon> <t>Heavy T-Storms</t> <wind> <s>20</s> <gust>N/A</gust> <d>196</d> <t>SSW</t> </wind> <bt>Hvy T-Storms</bt> <ppcp>90</ppcp> <hmid>95</hmid> </part> <part p="n"> <icon>29</icon> <t>Clouds Early / Clearing Late</t> <wind> <s>16</s> <gust>N/A</gust> <d>305</d> <t>NW</t> </wind> <bt>Clear Late</bt> <ppcp>20</ppcp> <hmid>71</hmid> </part> </day><day d="3" t="Wednesday" dt="Nov 19"> <hi>4</hi> <low>-5</low> <sunr>6:54 AM</sunr> <suns>5:09 PM</suns> <part p="d"> <icon>32</icon> <t>Sunny</t> <wind> <s>20</s> <gust>N/A</gust> <d>294</d> <t>WNW</t> </wind> <bt>Sunny</bt> <ppcp>0</ppcp> <hmid>38</hmid> </part> <part p="n"> <icon>31</icon> <t>Clear</t> <wind> <s>8</s> <gust>N/A</gust> <d>292</d> <t>WNW</t> </wind> <bt>Clear</bt> <ppcp>0</ppcp> <hmid>42</hmid> </part> </day> </dayf> </weather>');
    }
}