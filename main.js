var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_img_width=30;
block_img_height=30;

player_object="";
block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.se({
            top:player_y,
            left:player_x

        });

        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;

        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x

        });

        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='80'&& e.shiftKey==true){
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keyPressed=='77'&& e.shiftKey==true){
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keyPressed=='38'){
        up();
        console.log("up");
    }

    if(keyPressed=='40'){
        down();
        console.log("down");
    }

    if(keyPressed=='37'){
        left();
        console.log("left");
    }

    if(keyPressed=='39'){
        right();
        console.log("right");
    }

    if(keyPressed=='67'){
        new_image("cloud.png");
        console.log("c");
    }

    if(keyPressed=='76'){
        new_image("light green grass");
        console.log("l");
    }

    if(keyPressed=='87'){
        new_image("wall 3.png");
        console.log("w");
    }

    if(keyPressed=='76'){
        new_image("dark6.png");
        console.log("68");
    }

    if(keyPressed=='71'){
        new_image("grass5.png");
        console.log("g");
    }

    if(keyPressed=='84'){
        new_image("trunk4.png");
        console.log("t");
    }

    if(keyPressed=='76'){
        new_image("light green grass");
        console.log("l");
    }
}


