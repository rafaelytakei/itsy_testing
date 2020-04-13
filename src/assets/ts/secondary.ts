import { sayHelloWorld, fp } from './helloModule';

/* Document ready */
$(function() {
    $('#helloWorld h1').html(sayHelloWorld());
    $('#paragraph').html('This is the secondary page');
})