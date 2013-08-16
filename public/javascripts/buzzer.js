window.onload = function() {
 
    var userSocket = io.connect('http://localhost:3030/user');
    var openButton = document.getElementById("openButton");
    var buzzerState = document.getElementById("buzzerState");
 
    userSocket.on('buzzing', function (data) {
        if (data.state) {
            buzzerState.innerHTML = 'buzzing...';
        } else {
            buzzerState.innerHTML = '';
        }
    });
 
    openButton.onmousedown = function() {
        userSocket.emit('button', { 'state':'pressed' });
    };

    openButton.onmouseout = function() {
        userSocket.emit('button', { 'state':'released' });
    };

    openButton.onmouseup = function() {
        userSocket.emit('button', { 'state':'released' });
    };
 
}