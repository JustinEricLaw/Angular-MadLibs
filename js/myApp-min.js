angular.module("myApp",["ngMessages"]).controller("myController",function(o){o.submit=function(){o.myForm.$valid?(console.log("The form is valid"),o.input=!1,o.output=!1):console.log("The form is invalid")},o.input=!0,o.output=!0,o.resetForm=function(){o.input=!0,o.output=!0,o.myForm.$setPristine(),o.celebrity="",o.noun="",o.objects="",o.adjective="",o.noun2="",o.beverage="",o.dogname="",o.place="",o.liquid=""}});