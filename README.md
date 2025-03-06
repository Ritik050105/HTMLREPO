inline styling:
	*within the header color inline styling (<h1 style="color:red";>content</h1>
internal styling:
	*<stlye> tag is used inside the <head> tag
external styling:
<head>
<link rel="stylesheet" type="text/css" href="./css/style.css">
</head>

selectors:
9 types
*universal selector
*id selector
*class selector
*elements selector
*grouping selector

*child selector
*adjacent selector
*descentent selector
*general siblings selector

Universal selector:
'*'->universal selector(asterisk)
should be in the top of the page
*{
	margin:50px;
}

element selector:
p{
    color:black;
    background-color:antiquewhite;
}

grouping selector:
p,h1,h2{
    color:black;
    background-color:antiquewhite;
}

id(unique) selector:
#portfolio-heading{
	color:black;
}

class selector:
class selector accepts the multiple class name in a single line
.portfolio-heading{
	color:black;
}
.head{
	background-color:white;
}

profile card using box model:(height,width,padding,margin,border):
MARGIN:(outer spacing):
Left,Right,Top,Bottom,0 Auto
PADDING:(content spacing)

Login-form using font awesome icon:
font awesome cdnjs
cdn->content delivery network
go and copy with link tag and paste it inside the head tag

how to style the font awesomr icon

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

layout:
flex(mostly used) and grid
FLEX:(flex froggy game)
display:flex
flex:row/column
justify-content:space-around,space-between,sapce-along,space-evenly
align-item:start/end/center/baseline/space-around/space-between/sapce-along/space-evenly

GRID:(grid garden)
12grid->100%
1grid's width ->100/12=8.33%

position:
1)absolute
2)relative
3)sticky
4)static
5)fixed

layer:->(z-index)
back->z-index:-1

media-query:->to response the webpages
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

