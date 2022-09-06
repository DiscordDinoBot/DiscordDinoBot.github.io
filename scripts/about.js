// About Section

const accordion_item_headers = document.querySelectorAll(".accordionItemHeader");

accordion_item_headers.forEach(accordion_Item_Header => {
  accordion_Item_Header.addEventListener("click", event => {
    accordion_Item_Header.classList.toggle("active");

    const accordion_Item_Body = accordion_Item_Header.nextElementSibling;
    if (accordion_Item_Header.classList.contains("active")){
        accordion_Item_Body.style.maxHeight = accordion_Item_Body.scrollHeight + "px";
    }

    else{
        accordion_Item_Body.style.maxHeight = 0;
    }

  });
});