



export const underlineTimer = (timer, style, tag) => {

	// await setTimeout(() => {
	// 	return 
	// }, 3000)
	// .then(() => )

	const delay = time => new Promise(resolve => setTimeout(resolve, time))

	const interVal = time => new Promise(resolve => setInterval(resolve, time))
	const interVal2 = ((time, arr) => {
		new Promise(resolve => setInterval(resolve, time))

		let setUnderLine = arr.forEach(i => setInterval(i.textDecoration = 'underline', 1000))
		
		return setUnderLine

	})
	let array = tag.innerHTML.split('')

	
	function adjust(s) {
		return s.fontStyle = 'italic'
	}

	return delay(timer)
		.then(() => style.color = 'pink')
		.then(() => tag.innerHTML = 'I am now pink.')
		.then(() => adjust(style))
		.then(() => delay(2000))
		.then(() => style.textDecoration = 'underline')
		.then(() => tag.innerHTML = array[0])
		.then(() => delay(500))
		.then(() => tag.innerHTML = array[0] + array[1])
		.then(() => delay(500))
		.then(() => tag.innerHTML = array[0] + array[1] + array[2])
		.then(() => delay(500))
		.then(() => tag.innerHTML = array[0] + array[1] + array[2] + array[3])
		.then(() => delay(500))
		.then(() => tag.innerHTML = array[0] + array[1] + array[2] + array[3] + array[4])
		
	
};

export const printText = (word, speed, array, count, innerEl) => {
	let arr = word.split('');
	let length = arr.length;

	setTimeout(function() {	
		array.push(arr[count - 1])
		innerEl.innerHTML = array.join('')
		if (count < length) {
			count += 1
			printText(word, speed, array, count, innerEl)
		}
	}, speed)
}

export function paginate(array, contentLimit, uList, pageNumContainer) {
    let pageCount = array.length / contentLimit
    let pageNums = Math.ceil(pageCount)

    let pageNumbersArr = [];
    let length = Number(pageNums)
    while (pageNumbersArr.length < pageNums) {
        length -= 1
        pageNumbersArr.push(length + 1)
    }

    pageNumContainer.innerHTML = pageNumbersArr.reverse().map(i => `<a class='pagiLink'>${i}</a>`).join(' ')
    let links = Array.from(document.querySelectorAll('.pagiLink'))
    links[0].className = 'pagiLink active' // initial active number
    let offset = contentLimit + 1

    array.forEach((i, index) => {
        let newLi = document.createElement('li')
        newLi.id = `${index + 1}`
        newLi.className = 'liClass hide'
        if (newLi.id < offset) {
            newLi.className = 'liClass'
        }
        // let partialWebAddy = i?.website?.url?.split('//')[1]
        // let lowerCase = partialWebAddy?.toLowerCase()
        // lowerCase?.slice(-1) === '/' ? lowerCase = lowerCase?.slice(0, -1) : lowerCase
        // lowerCase?.includes('www.') ? lowerCase = lowerCase?.slice(4) : lowerCase

        let date = i.firstactivitydate.split('T')
        let year = date[0].slice(0, 4)
        let day = date[0].slice(5, 7)
        let month = date[0].slice(8)

        
        
        newLi.innerHTML = `
            <div class="card">
                <div class="textoutline">
                    <p id="business">${i.primarydba}</p>
                    <p id="address">${i.address}</p>
                    <p id="activity">Active since: ${day + '-' + month + '-' + year}</p>
                </div>
            </div>    
                `
        uList.append(newLi)
        // newLi.before(containerUl)
    })

    let allLi = Array.from(document.querySelectorAll('.liClass'))
    
    let currentPage;
    let currentPageNumber;
    links.forEach(i => i.addEventListener('click', e => {
        currentPage = i.innerHTML
        
        // pageArr[0] = currentPage
        // links[0] = currentPage
        currentPageNumber = Number(currentPage)

        
        
        if (e.target.tagName !== 'A') return;
        
        document.querySelector('.active').classList.toggle('active');
        currentPageNumber && e.target.setAttribute("class", "active pagiLink")

        
        let filtLi = allLi.filter((item, index) => {
            let itemId = Number(item.id);

            if (currentPageNumber !== itemId) {
                item.classList.add('hide')
            } else if (currentPageNumber === itemId) {
                item.classList.add('hide')
            }
            
            return itemId <= currentPageNumber * contentLimit && itemId > currentPageNumber * contentLimit - offset + 1
        })
        filtLi.forEach((i) => {
            if (i.className === 'liClass hide') {
                i.className = 'liClass'
            } else {
                i.className = 'liClass hide'
                // this is for the data not the numbers
            }
        })

    }))

    let naviButtons = Array.from(document.querySelectorAll('.naviButtons'))
    

    naviButtons.forEach((i => i.addEventListener('click', e => {
            let currentActive = document.querySelector('.active')
            
            try {
                if (e.target.id === 'next') {
                    currentActive.nextElementSibling.click()
                } else if (e.target.id === 'prev') {
                    currentActive.previousElementSibling.click() 
                }

            } catch (err) {

            }

        })
    ))

    
}








// cb hell version of printText function
export default function timeWords(arr) {

    setTimeout(() => {
        p.innerHTML = arr[0]
            setTimeout(() => {
                p.innerHTML = (arr[0] + arr[1])
                    setTimeout(() => {
                        p.innerHTML = (arr[0] + arr[1] + arr[2])
                            setTimeout(() => {
                                p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3])
                                    setTimeout(() => {
                                        p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4])
                                            setTimeout(() => {
                                                p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5])
                                                    setTimeout(() => {
                                                        p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6])
                                                            setTimeout(() => {
                                                                p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7])
                                                                    setTimeout(() => {
                                                                        p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8])
                                                                            setTimeout(() => {
                                                                                p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9])
                                                                                    setTimeout(() => {
                                                                                        p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9] + arr[10])
                                                                                            setTimeout(() => {
                                                                                                p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9] + arr[10] + arr[11])
                                                                                                    setTimeout(() => {
                                                                                                        p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9] + arr[10] + arr[11] + arr[12])
                                                                                                            setTimeout(() => {
                                                                                                                p.innerHTML = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9] + arr[10] + arr[11] + arr[12] + arr[13])
                                                                                                            }, 125);
                                                                                                    }, 125);
                                                                                            }, 125);
                                                                                    }, 125);
                                                                            }, 125);
                                                                    }, 125);
                                                            }, 125);
                                                    }, 125);
                                            }, 125);
                                    }, 125);
                            }, 125);
                    }, 125);
            }, 125);  
    }, 125)

} 