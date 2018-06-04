from pyquery import PyQuery    
import urllib2
#program, spell, shop
words = [		
"tell",	
"sell",	
"hold",	
"behold",	
"uphold",	
"stand",	
"understand",	
"withstand",	
"lose",	
"shoot",	
"bite",	
"hide",	
"slide",	
"buy",		
"bring",	
"think",	
"fight",	
"teach",	
"catch",	
"spit",	
"have",	
"make",	
"write",	
"ride",	
"drive",	
"rise",	
"strive",	
"stride",	
"smite",	
"speak",	
"steal",	
"break",	
"wake",	
"begin",	
"drink",	
"sink",	
"stink",	
"swim",	
"spring",	
"wear",	
"swear",	
"bear",	
"tear",	
"take",	
"undertake",	
"partake",	
"shake",	
"get",		
"forget",	
"give",	
"forgive",	
"forbid",	
"shrink",	
"ring",	
"run",		
"know",	
"grow",	
"throw",	
"blow",	
"draw",	
"withdraw",	
"overdraw",	
"fly",		       
"come",	
"overdo",	
"undo",	
"go",		
"do",		
"oversee",	
"see",		
"overcome",	
"become",	
"undergo",	
"eat",		
"fall",	
"be"
]

for word in words:
	urldic = 'http://www.dictionary.com/browse/' + word
	responsedic = urllib2.urlopen(urldic)
	htmlDic = responsedic.read()
	pq = PyQuery(htmlDic)
	tag = pq('.e1rg2mtf0 span audio source')
	elem = tag.eq(1)
	
	urlMp3 = elem.attr('src')
	print(urlMp3)
	responsemp3 = urllib2.urlopen( urlMp3 )
	html2 = responsemp3.read()
	open( 'dictionaryIV/' + word + '.mp3', 'wb').write(html2)
