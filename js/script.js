var btn_calc = document.querySelector('.calc')
var btn_clear = document.querySelector('.clear')
var month = document.querySelector('.month')
var days = document.querySelector('.days')


document.querySelector('.child').addEventListener('input',
	function () {
		this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
	}
)

document.querySelector('.days').addEventListener('input',
	function () {
		this.value = this.value.replace(/[^\d]/g, '');
		if (month.options[month.selectedIndex].text == 'Февраль') {
			if (days.value > 28) {
				days.value = 28;
			}
		}
		if (month.options[month.selectedIndex].text == 'Январь' || month.options[month.selectedIndex].text == 'Март' || month.options[month.selectedIndex].text == 'Май' ||
			month.options[month.selectedIndex].text == 'Июль' || month.options[month.selectedIndex].text == 'Август' || month.options[month.selectedIndex].text == 'Октябрь' ||
			month.options[month.selectedIndex].text == 'Декабрь') {
			if (days.value > 31) {
				days.value = 31;
			}
		}
		if (month.options[month.selectedIndex].text == 'Апрель' || month.options[month.selectedIndex].text == 'Июнь' || month.options[month.selectedIndex].text == 'Сентябрь' ||
			month.options[month.selectedIndex].text == 'Ноябрь') {
			if (days.value > 30) {
				days.value = 30;
			}
		} else if (month.options[month.selectedIndex].text == 'Месяц') {
			days.value = 0;
		}
	}
)
btn_calc.addEventListener('click', function () {
	var days = document.querySelector('.days').value
	var day = document.getElementById("day").value
	var uslugi = +document.querySelector('.service').value
	var child = document.querySelector('.child').value
	if (days == "" || day == "" || child == "" || month.value == 0) {
		{
			alert("Заполните все поля!");
		}
	} else {
		let summa = day * days + uslugi;
		document.getElementById("sum").value = summa;
		var result = document.getElementById('result');
		result.style.visibility = 'visible';
	}
	
});

month.addEventListener('click', function () {
	document.getElementById("day").value = month.value;
})

btn_clear.addEventListener('click', function () {
	var result = document.getElementById('result');
	result.style.visibility = 'hidden';
})