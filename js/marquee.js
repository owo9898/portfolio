const h1Tag1 = document.querySelector('.stroke')


const textArr1 = 'WORK'.split(' ','<span>')
let count1 = 0;


initTexts(h1Tag1,textArr1)
// initTexts(h1Tag1,textArr2)

function initTexts(element,textArray){
    textArray.push(...textArray)
    for(let i=0; i<textArray.length; i++){
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`

    }
    // console.log(textArr1)
}
function marqueeText(count, element, direction)
{
    // console.log(element.clientWidth)
    //text 너비
    if(count > element.clientWidth) {
        element.style.transform = `translate3d(0,0,0)`
        count = 0
        //section 제자리로 돌아가라
    }
    element.style.transform = `translate3d(${
        direction*count}px, 0, 0)`
        //x,y,z순서 //count수가 크면 속도가 빠르다.
    
    return count 
}
function animate(){
    //움직이는 함수, 
        count1++
        count1 = marqueeText(count1,h1Tag1, -1)
        //반복해주는 함수 써야함. 계속 실행되도록, 재귀함수
        // requestAnimationFrame 움직이는 애들(animate)을 계속 호출해준다. 
        window.requestAnimationFrame(animate)
    }

    animate();
    