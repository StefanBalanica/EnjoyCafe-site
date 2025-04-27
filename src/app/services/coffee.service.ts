import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  getHotCoffees() {
    return [
      {
        image: '/capucino.jpg',
        title: 'Capuccino',
        description: 'Cafea cremoasă cu spumă de lapte.',
        price: '15.5 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/latteprod.jpg',
        title: 'Latte',
        description: 'Espresso cu mult lapte cald.',
        price: '16 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/flat.jpg',
        title: 'Flat White',
        description: 'Espresso intens cu lapte catifelat.',
        price: '16.5 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/esspreso.jpg',
        title: 'Espressso',
        description: 'Shot concentrat de energie.',
        price: '11 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/macchiato.jpg',
        title: 'Espresso Macchiato',
        description: 'Espresso cu spumă de lapte subtilă.',
        price: '11.5 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/americano.jpg',
        title: 'Americano',
        description: 'Espresso alungit cu apă fierbinte.',
        price: '12.5 LEI',
        buttonText: 'Order Now'
      }
    ];
  }
  getIceCoffees() {
    return [
      {
        image: '/iceLatte.jpg',
        title: 'Ice Latte',
        description: 'Cafea rece cu lapte cremos.',
        price: '16 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/iceCappucino.jpg',
        title: 'Ice Cappuccino',
        description: 'Cafea rece cu spumă de lapte.',
        price: '15.5 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/iceespresso.jpg',
        title: 'Ice Espresso',
        description: 'Espresso rece in zile călduroase.',
        price: '12 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/iceamericano.jpg',
        title: 'Ice Americano',
        description: 'Espresso rece diluat cu apă.',
        price: '14 LEI',
        buttonText: 'Order Now'
      }
    ];
  }

  getFresh() {
    return [
      {
        image: '/orange.jpg',
        title: 'Portocala',
        description: 'Suc proaspăt de portocale naturale.',
        price: '25 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/rodie-portocala.jpg',
        title: 'Rodie-Portocala',
        description: 'Mix delicios de rodie și portocală.',
        price: '29 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/ananas.jpg',
        title: 'Ananas',
        description: 'Suc tropical din ananas proaspăt.',
        price: '29 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/apple.jpg',
        title: 'Mar Verde',
        description: 'Suc răcoritor din mere verzi.',
        price: '25 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/greph.jpg',
        title: 'Grepfruit',
        description: 'Suc natural din grepfruit proaspăt.',
        price: '25 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/sfecla.jpg',
        title: 'Sfecla Rosie',
        description: 'Suc sănătos din sfeclă roșie proaspătă.',
        price: '25 LEI',
        buttonText: 'Order Now'
      }
    ];
  }

  getMilkshake() {
    return [
      {
        image: '/milkshake.jpg',
        title: 'Sunrise',
        description: 'Milkshake răcoritor cu arome tropicale.',
        price: '25 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/milkshake2.jpg',
        title: 'Paradise',
        description: 'Milkshake cremos cu arome exotice de mango.',
        price: '25 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/milkshake3.jpg',
        title: 'Banana Republic',
        description: 'Milkshake delicios cu banane proaspete.',
        price: '25 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/milkshake4.jpg',
        title: 'Coconut Breze',
        description: 'Milkshake cu aromă de nucă de cocos.',
        price: '25 LEI',
        buttonText: 'Order Now'
      },
      {
        image: '/milkshake5.jpg',
        title: 'Oreo Dream',
        description: 'Milkshake cremos cu biscuiți Oreo si frisca.',
        price: '25 LEI',
        buttonText: 'Order Now'
      }
    ];
  }
}
