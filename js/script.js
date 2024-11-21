let flagBuy = 0

function buy()
{
    if (flagBuy == 0)
    {
        document.querySelector('.product__btn').style.background = 'rgb(17, 196, 76)';
        document.querySelector('.product__btn').innerText = 'В корзине'
        flagBuy = 1;
    }
    else
    {
        document.querySelector('.product__btn').style.background = 'rgb(0, 91, 255)';
        document.querySelector('.product__btn').innerText = 'Купить';
        flagBuy = 0;
    }
}
