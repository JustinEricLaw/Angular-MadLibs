angular.module("myApp",["ngMessages"]).controller("myController",function(e){e.celebrity="",e.noun="",e.objects="",e.adjective="",e.noun2="",e.beverage="",e.dogname="",e.place="",e.liquid="",e.gender={type:"female",her_his:"her",she_he:"she",her_him:"her"},e.submit=function(){e.myForm.$valid?console.log("The form is valid"):console.log("The form is invalid")}});