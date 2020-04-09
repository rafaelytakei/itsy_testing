import { sayHello } from './greet';

function showHello(divName: string, name: string) {
    let elt = document.getElementById(divName);
    elt!.innerText = sayHello(name);
}

showHello('greeting', 'TypeScript');