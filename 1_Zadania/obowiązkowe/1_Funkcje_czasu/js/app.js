    const countHello = function(number) {
            var counter = 1;

            var intervalID = setInterval(() => {
            console.log('Hello' + counter++);

                if (counter == number) {
                    clearInterval(intervalID);
                }
            }, 500);

        }
        countHello(4);