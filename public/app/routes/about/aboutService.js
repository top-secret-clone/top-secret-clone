angular.module('topSecret')
.service('aboutService', function($http){
  this.clientsServed = [
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Ubisoft.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Oregon.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Rossi.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Peligroso.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Nike.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Redbull.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Skullcandy.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Oakley.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/skiutah.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/jdawgs.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/publik.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/PowderMountain.png'}
  ]

  this.bios = [
    {
      'name': 'JARED STRAIN',
      'title': 'Partner/ Design Director',
      'bio':
      'A designer by trade, Jared’s a seasoned vet whose misguided youth of skateboarding and hair metal inspired him to pursue a creative career. With over a decade in the design game, Jared’s worn out Wacoms for blue chip brands like Coke, Microsoft, Nike, MTV, Rossignol, and K2. While Jared loves getting busy on the big stage, his true passion lies in conjuring brands out of thin air—amassing a formidable collection of design awards for the identities he’s built.',
      'imageUrl': 'http://www.wearetopsecret.com/images/about/partners/jared.jpg'
    },
    {
      'name': 'RHEDA FOUAD',
      'title': 'Partner / CFO / Consigliere',
      'bio':
      'Rheda is our business mastermind. Armed with a head full of complex equations and financial formulas, he\'s able to figure out how to win even when everyone else is losing. After running a successful family enterprise and growing his real estate empire, Rheda decided to take on a new challenge and become our trusted Consigliere. On the rare occasion that he has some down time, you can find him with a stiff drink in hand cruising the net looking for high rises for sale. He wants a skyscraper with his name on it. Seriously.',
      'imageUrl': 'http://www.wearetopsecret.com/images/about/partners/rheda.jpg'
    },
    {
      'name': 'JOSH BATCHELOR',
      'title': 'Partner / Director of Development',
      'bio':
      'Josh is STS’s dark lord of development. With over 15 years experience developing complex applications and Internet things for brands like Jaybird, Coke, Lexus and Net Gear—Josh has been deep in the trenches with the evolution of the Internet. He gets things done in ones and zeros so hard he makes Neo look like a Luddite. Got nerd questions? Chances are he’s been there and done that. Twice. With his eyes closed. While eating three Otter Pops. When not writing glorious, glorious code, you might find Josh working on his apparel line or doing soccer hooligan things.',
      'imageUrl': 'http://www.wearetopsecret.com/images/about/partners/josh.jpg'
    },
    {
      'name': 'DAVE TREVINO',
      'title': 'Partner / Director of Photography',
      'bio':
      'Dave is an accomplished director of photography and editor who, for the last two decades, has been behind the lens creating compelling and stellar content for the likes of NBC Sports, Red Bull, Burton Snowboards, Mountain Dew, and Skullcandy to name a few. Dave has an impeccable eye, a relentless work ethic and does whatever it takes to get the shot; all while making it look so easy.',
      'imageUrl': 'http://www.wearetopsecret.com/images/about/partners/dave.jpg'
    },
  ]
})
