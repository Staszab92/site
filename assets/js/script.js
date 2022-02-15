$('.catalog').click(function() {
	if ($(".catalog-menu__submenu").hasClass('active'))
	{
		$(".catalog-menu__submenu").removeClass('active');
	}
	else
	{
		$(".catalog-menu__submenu").addClass('active');
	}
});

$('.fof3').click(function() {
	if ($(".bucket-menu-submenu").hasClass('active'))
	{
		$(".bucket-menu-submenu").removeClass('active');
	}
	else
	{
		$(".bucket-menu-submenu").addClass('active');
	}
});

function l_image (a) {
    document.example_img.src = a;
}
