            list = []
            for (let i =0; i < 5; i++) {
                let num = parseInt(prompt("Give a number:"))
                list.push(num)
            }
            for(let i= list.length - 1; i>= 0; i--) {
              console.log(list[i])
            }
