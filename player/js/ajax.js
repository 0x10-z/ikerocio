$(document).ready(function(e){
	$.ajax({
	  type: "POST",
	  url: "ajax/podcast.php?podcast-type=elexorcista",
	  data: {},
	  beforeSend: function(data){
	  	$("#elexorcista-podcast-list").html("<h3>LOADING...</h3>");
	  },
	  success: function(data){
	  	html = "";
	  	for(i = data.length-1;i>=0;i--){
	  		class_type = i%2==0?"yellow":"black";
	  		name = data[i].substr(43).replace("%20", " ").replace("%20", " ");

	  		html += "<a href='"+data[i]+"' download class='list-group-item "+class_type+"'>El ";
	  		html += name;
	  		html += "</a>";
	  	}
	  	$("#elexorcista-badge").html(data.length);
	  	$("#elexorcista-podcast-list").html(html);
	  },
	  dataType: "json"
	});

});

/*
<li class="list-group-item">
    <span class="badge">14</span>
    Cras justo odio
</li>
*/