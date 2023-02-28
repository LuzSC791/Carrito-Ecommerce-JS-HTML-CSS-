const catalogue = document.querySelector('.catalogue');

const api = async() =>{
    try {
        const url = await fetch('https://api.escuelajs.co/api/v1/products')
        const products = await(url.json())
        products.map( pro =>{
            console.log(pro)
            let divProduct = document.createElement('div')
            let pProduct = document.createElement('p')
            let imgProduct = document.createElement('img')
            let buttonTrolley = document.createElement('button')
            // pProduct.appendChild(document.createTextNode(`Precio: ${pro.price}, Categoria: ${pro.category.name}`))
            pProduct.innerHTML = (`<p><b>Precio:</b> ${pro.price}</p> <p><b>Categoria:</b> ${pro.category.name}</p> <p><b>Desacripcion:</b> ${pro.description}</p> <p> <b>Folio:</b> ${pro.id}</p>`)
            imgProduct.setAttribute('src',pro.images)
            divProduct.appendChild(imgProduct)
            divProduct.appendChild(pProduct)
            imgProduct.classList.add('img-product')
            // imgProduct.setAttribute('class',pro.images)
            pProduct.classList.add('data-product')
            divProduct.classList.add('container-product')
            divProduct.appendChild(pProduct)
            buttonTrolley.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>`
            // div.classList.add('data-product')
            // catalogue.appendChild(div)
            buttonTrolley.classList.add('btn-trolley')
            divProduct.appendChild(buttonTrolley)
            catalogue.appendChild(divProduct)
        });
        
        // catalogue.appendChild()
    } catch (err) {
        console.log(err)
    }
}
api()