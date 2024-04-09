var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Cindy1.jpg", "Oliver1.png" , "Daddy1.png", "Mummy1.png"];
var names = ["Family Book","Cindy Di", "Oliver Yao", "Daddy","Mummy"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
