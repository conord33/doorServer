window.onload = function() {
 
    var currentState;
    var socket = io.connect('http://localhost:3030');
    var openButton = document.getElementById("openButton");
    var buzzerState = document.getElementById("buzzerState");
 
    socket.on('buzzing', function (data) {
        if (data.state) {
            buzzerState.innerHTML = 'buzzing...';
        } else {
            buzzerState.innerHTML = '';
        }
    });
 
    openButton.onmousedown = function() {
        socket.emit('button', { 'state':'pressed' });
    };

    openButton.onmouseout = function() {
        socket.emit('button', { 'state':'released' });
    };

    openButton.onmouseup = function() {
        socket.emit('button', { 'state':'released' });
    };
 
}