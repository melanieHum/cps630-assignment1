$(document).ready(function() {
	
	//information windows are hidden once page loads
	$(".img-div").hide();
	$(".info-div").hide();
	
	//hides visible information windows
	$("#reset-div").click(function() {		
		$(".img-div").hide();
		$(".info-div").hide();
	});

	//makes information windows visible with the appropriate content
	$("#picasso").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src=https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzU0MDk2MTQx/pablo-picasso-9440021-1-402.jpg height=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>P&nbsp;A&nbsp;B&nbsp;L&nbsp;O &nbsp; P&nbsp;I&nbsp;C&nbsp;A&nbsp;S&nbsp;S&nbsp;O</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Birth</b></td><td>October 25, 1881</td></tr><tr><td><b>Death</b></td><td>April 8, 1973</td></tr><tr><td><b>Natural habitat</b></td><td>Málaga, Spain</td></tr><tr><td><b>Genres</b></td><td>Cubism, Surrealism</td></tr><tr><td><b>Famous works</b></td><td><span class=info-list><ul><li>Les Demoiselles d'Avignon (1907)</li><li>Girl before a Mirror (1932)</li><li>Le Rêve (1932)</li><li>Guernica (1937)</li><li>The Weeping Woman (1937)</li></ul></span></td></tr></table></div></center></body>");
	});
	
	$("#van-gogh").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src=http://www.vincentvangogh.org/images/van-gogh.jpg height=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>V&nbsp;I&nbsp;N&nbsp;C&nbsp;E&nbsp;N&nbsp;T&nbsp; &nbsp;V&nbsp;A&nbsp;N &nbsp; G&nbsp;O&nbsp;G&nbsp;H</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Birth</b></td><td>March 30, 1853</td></tr><tr><td><b>Death</b></td><td>July 29, 1890</td></tr><tr><td><b>Natural habitat</b></td><td>Zundert, Netherlands</td></tr><tr><td><b>Genres</b></td><td>Post-Impressionism</td></tr><tr><td><b>Famous works</b></td><td><span class=info-list><ul><li>Sorrow (1882)</li><li>The Potato Eaters (1885)</li><li>Bedroom in Arles (1888)</li><li>The Starry Night (1889)</li><li>Wheatfield with Crows (1890)</li></ul></span></td></tr></table></div></center></body>");
	});
	
	$("#dali").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src=http://media.guestofaguest.com/t_article_content/wp-content/uploads/2013/11/salvador-dali_himself.jpg width=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>S&nbsp;A&nbsp;L&nbsp;V&nbsp;A&nbsp;D&nbsp;O&nbsp;R &nbsp; D&nbsp;A&nbsp;L&nbsp;Í</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Birth</b></td><td>May 11, 1904</td></tr><tr><td><b>Death</b></td><td>January 23, 1989</td></tr><tr><td><b>Natural habitat</b></td><td>Figueres, Catalonia, Spain</td></tr><tr><td><b>Genres</b></td><td>Cubism, Dada, Surrealism</td></tr><tr><td><b>Famous works</b></td><td><span class=info-list><ul><li>The Persistence of Memory (1931)</li><li>Swans Reflecting Elephants (1937)</li><li>Dream Caused by the Flight of a Bee Around a Pomegranate a Second Before Awakening (1944)</li><li>The Elephants (1948)</li><li>Crucifixion (Corpus Hypercubus) (1954)</li></ul></span></td></tr></table></div></center></body>");
	});
	
	$("#da-vinci").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/LEONARDO.JPG/491px-LEONARDO.JPG height=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>L&nbsp;E&nbsp;O&nbsp;N&nbsp;A&nbsp;R&nbsp;D&nbsp;O &nbsp; D&nbsp;A &nbsp; V&nbsp;I&nbsp;N&nbsp;C&nbsp;I</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Birth</b></td><td>April 15, 1452</td></tr><tr><td><b>Death</b></td><td>May 2, 1519</td></tr><tr><td><b>Natural habitat</b></td><td>Vinci, Republic of Florence</td></tr><tr><td><b>Genres</b></td><td>High Renaissance</td></tr><tr><td><b>Famous works</b></td><td><span class=info-list><ul><li>Annunciation (1472)</li><li>Salvador Mundi (1490)</li><li>The Last Supper (1498)</li><li>Mona Lisa (1503)</li><li>St. John the Baptist (1513)</li></ul></span></td></tr></table></div></center></body>");
	});
	
	$("#munch").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src=http://www.royalcourt.no/aim/kongehuset2/files/7/4/7/1cba1f3f53b5eda88ab7c68b3c03450929b33a0f15/7471cba1f3f53b5eda88ab7c68b3c03450929b33a0f15.jpg height=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>E&nbsp;D&nbsp;V&nbsp;A&nbsp;R&nbsp;D &nbsp; M&nbsp;U&nbsp;N&nbsp;C&nbsp;H</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Birth</b></td><td>December 12, 1863</td></tr><tr><td><b>Death</b></td><td>January 23, 1944</td></tr><tr><td><b>Natural habitat</b></td><td>Ådalsbruk, Løten, United Kingdoms of Sweden and Norway</td></tr><tr><td><b>Genres</b></td><td>Expressionism, Symbolism</td></tr><tr><td><b>Famous works</b></td><td><span class=info-list><ul><li>The Sick Child (1886)</li><li>Melancholy (1891)</li><li>The Scream (1893)</li><li>Anxiety (1894)</li><li>Jealousy (1895)</li></ul></span></td></tr></table></div></center></body>");
	});
	
	$("#american-gothic").click(function() {		
			$(".img-div").show();
			$(".info-div").show();
			$(".img-div").html("<img src= https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg height=100%>");
			$(".info-div").html("<body><div class=page-header><br><h1>A&nbsp;M&nbsp;E&nbsp;R&nbsp;I&nbsp;C&nbsp;A&nbsp;N &nbsp; G&nbsp;O&nbsp;T&nbsp;H&nbsp;I&nbsp;C</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Artist</b></td><td>Grant Wood</td></tr><tr><td><b>Year</b></td><td>1930</td></tr><tr><td><b>Type</b></td><td>Oil on beaverboard</td></tr><tr><td><b>Dimensions</b></td><td>78 cm × 65.3 cm<br>(30¾ in × 25¾ in)</td></tr><tr><td><b>Genres</b></td><td>Modernism</td></tr><tr><td><b>Location</b></td><td>Art Institute of Chicago</td></tr></table></div></center></body>");
		});
	
	$("#guernica").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src= https://artsintherightplace.files.wordpress.com/2011/01/guernica.jpg width=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>G&nbsp;U&nbsp;E&nbsp;R&nbsp;N&nbsp;I&nbsp;C&nbsp;A</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Artist</b></td><td>Pablo Picasso</td></tr><tr><td><b>Year</b></td><td>1937</td></tr><tr><td><b>Type</b></td><td>Oil on canvas</td></tr><tr><td><b>Dimensions</b></td><td>349.3 cm × 776.6 cm<br>(137.4 in × 305.5 in)</td></tr><tr><td><b>Genres</b></td><td>Cubism, Surrealism</td></tr><tr><td><b>Location</b></td><td>Museo Reina Sofia,<br>Madrid, Spain</td></tr></table></div></center></body>");
	});
	
	$("#the-persistence-of-memory").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src= https://uploads5.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg width=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>T&nbsp;H&nbsp;E &nbsp; P&nbsp;E&nbsp;R&nbsp;S&nbsp;I&nbsp;S&nbsp;T&nbsp;E&nbsp;N&nbsp;C&nbsp;E<br>O&nbsp;F &nbsp; M&nbsp;E&nbsp;M&nbsp;O&nbsp;R&nbsp;Y</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Artist</b></td><td>Salvador Dalí</td></tr><tr><td><b>Year</b></td><td>1931</td></tr><tr><td><b>Type</b></td><td>Oil on canvas</td></tr><tr><td><b>Dimensions</b></td><td>24 cm × 33 cm<br>(9.5 in × 13 in)</td></tr><tr><td><b>Genres</b></td><td>Surrealism</td></tr><tr><td><b>Location</b></td><td>Museum of Modern Art,<br>New York City</td></tr></table></div></center></body>");
	});
	
	$("#the-scream").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src= https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/1200px-The_Scream.jpg height=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>T&nbsp;H&nbsp;E &nbsp; S&nbsp;C&nbsp;R&nbsp;E&nbsp;A&nbsp;M</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Artist</b></td><td>Edvard Munch</td></tr><tr><td><b>Year</b></td><td>1893</td></tr><tr><td><b>Type</b></td><td>Oil, tempera, pastel and crayon on cardboard</td></tr><tr><td><b>Dimensions</b></td><td>91 cm × 73.5 cm<br>(36 in × 28.9 in)</td></tr><tr><td><b>Genres</b></td><td>Expressionism</td></tr><tr><td><b>Location</b></td><td>National Gallery,<br>Oslo, Norway</td></tr></table></div></center></body>");
	});
	
	$("#starry-night").click(function() {		
		$(".img-div").show();
		$(".info-div").show();
		$(".img-div").html("<img src= https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg width=100%>");
		$(".info-div").html("<body><div class=page-header><br><h1>S&nbsp;T&nbsp;A&nbsp;R&nbsp;R&nbsp;Y &nbsp; N&nbsp;I&nbsp;G&nbsp;H&nbsp;T</h1><br></div><br><center><div class=info-table><table><tr><th style=width:125px></th><th style=width:225px></th></tr><tr><td><b>Artist</b></td><td>Vincent van Gogh</td></tr><tr><td><b>Year</b></td><td>1889</td></tr><tr><td><b>Type</b></td><td>Oil on canvas</td></tr><tr><td><b>Dimensions</b></td><td>73.7 cm × 92.1 cm<br>(29 in × ​36 1⁄4 in)</td></tr><tr><td><b>Genres</b></td><td>Modernism, Post-Impressionism</td></tr><tr><td><b>Location</b></td><td>Museum of Modern Art,<br>New York City</td></tr></table></div></center></body>");
	});	
});	
