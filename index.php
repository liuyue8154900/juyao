<?php 
	//写入数据到数据库
	$cb=mysql_connect("w.rdc.sae.sina.com.cn:3307","0jnxyzoojl","i0ylix34jlyxj5klmhk02l35m44l2wxw2ylxlkxk");
	if($cb){
  
		mysql_select_db("app_zhulia");
		mysql_query("set names utf8");
        
        
        $content = file_get_contents("图片路径.txt");
	$ab = explode(',',$content);
	foreach($ab as $k=>$v){
    	$c = $v;
    	$d = $k;
    	mysql_query("INSERT INTO zhuli_img(img,img_index)VALUES('$c','$d')");
	}
    }
  
  
  

 ?>