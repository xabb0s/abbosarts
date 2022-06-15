let username = document.querySelector('.username')
let password = document.querySelector('.password')
let btn = document.querySelector('.btn')

btn.onclick = () => {
  if(username.value === 'username' && password.value === 'password'){
    window.location.href = ('./home/home.html')
  }
  else{
    alert(`Login yoki parol notog'ri!`)
  }
}


let color_1 = document.querySelector('.color-1')
let color_2 = document.querySelector('.color-2')
let color_3 = document.querySelector('.color-3')

let circle = document.querySelector('.circle')
let cube = document.querySelector('.cube')

color_1.onclick = (event) => {
  circle.style = 'background: hotpink; transition: .3s;'
  cube.style = 'background: yellowgreen; transition: .3s;'
} 

color_2.onclick = (event) => {
  circle.style = 'background: #68C7D9; transition: .3s;'
  cube.style = 'background: #E50D5E; transition: .3s;'
} 

color_3.onclick = (event) => {
  circle.style = 'background: #000000; transition: .3s;'
  cube.style = 'background: #ffffff; transition: .3s;'
} 
