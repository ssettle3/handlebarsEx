var data = {
  glockData : [
    { gun: 'Glock 19', caliber: '9mm', des: "The GLOCK 19 Gen4, in 9x19, introduces revolutionary design changes to the pistol that has found worldwide acclaim with security services both private and public. The Modular Back Strap design lets you instantly customize its grip to adapt to an individual shooter's hand size. The surface of the frame employs the new scientifically designed, real-world-tested, Gen4 rough textured technology. Internally, the new GLOCK dual recoil spring assembly substantially increases the life of the system. A reversible enlarged magazine catch, changeable in seconds, accommodates left or right-handed operators. The G19 Gen4 9x19mm retains the GLOCK accessory rail for your attachments."},
    
    { gun: 'Glock 17', caliber: '9mm', des: "Designed for professionals, the GLOCK 17, in 9x19, is the most widely used law enforcement pistol worldwide. Because of its unsurpassed reliability, above-average magazine capacity of 17 rounds in the standard magazine, and its low weight, it is trusted by law enforcement officers around the globe. With our revolutionary 'Safe Action' trigger system, the G17 9x19 pistol is safe, easy, and quick-just what you need in high-pressure situations."},
    
    { gun: 'Glock 22', caliber: '.40', des: "GLOCK introduced the G22 .40 in 1990 and effectively closed the gap between the heavy .45 Auto, and the internationally proven 9x19. GLOCK was the first manufacturer to make this popular and effective round accessible for law enforcement agencies. Today, police agencies across the U.S., and countless others throughout the world, put their trust in this 15-round .40 caliber pistol."},
    
    { gun: 'Glock 21', caliber: '.45', des: "Remarkable for its accuracy and light recoil, the GLOCK 21 delivers the legendary stopping power of the .45 AUTO round with a 10/13 round magazine capacity. Countless law enforcement units swear by the G21 pistol, and that's why this powerful, lightweight, all climate workhorse is standard issue from the North to South Poles."},
    
    { gun: 'Glock 42', caliber: '.380', des: "The new GLOCK 42, in .380 AUTO, is a slimline subcompact pistol engineered with the GLOCK Perfection promise and able to withstand the rigors of routine training. Made in the USA, the G42 is the smallest pistol GLOCK has ever introduced, making it ideal for pocket carry and shooters with smaller hands. Years of requests across market groups for a super-concealable, reliable single-stack .380 GLOCK pistol prompted extensive research and development to bring the GLOCK customer the G42."},
    
    { gun: 'Glock 32', caliber: '.357', des: "Designed as a compact model, the GLOCK 32, in .357, offers a unique combination of versatility, convincing ballistics, optimum carry comfort, and the GLOCK pistol reliability. Many agencies have already equipped their officers with this high-powered semi-automatic pistol, especially those in national parks and rural areas. The advantages of the .357 G32 become particularly decisive when deployed in the kind of open countryside these officers are patrolling."},
   
  ]
};



// var template = Handlebars.templates['guns'];
// $('.guns').html(template(data));

// var template = Handlebars.templates['guns'];
console.log(Handlebars.templates)
$('.glocks').html(Handlebars.templates['guns'](data));

// $('.guns').html('Hello');

