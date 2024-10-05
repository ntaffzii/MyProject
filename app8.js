function calculateBMI_M() {
    const height = document.getElementById('height_M').value;
    const weight = document.getElementById('weight_M').value;

    if (height > 0 && weight > 0) {
        const bmi = weight / ((height / 100) ** 2);
        let category = '';

        if (bmi < 18.5) {
            category = 'เสี่ยงมากกว่าปกติ';
        } else if (bmi < 24.9) {
            category = 'น้ำหนักปกติ';
        } else if (bmi < 29.9) {
            category = 'ท้วม';
        } else {
            category = 'โรคอ้วน';
        }

        document.getElementById('result_M').innerText = `BMI ของคุณคือ ${bmi.toFixed(2)} (${category})`;
    } else {
        document.getElementById('result_M').innerText = 'กรุณากรอกส่วนสูงและน้ำหนักด้วยครับ';
    }
}

function calculateBMI_F() {
    const height = document.getElementById('height_F').value;
    const weight = document.getElementById('weight_F').value;

    if (height > 0 && weight > 0) {
        const bmi = weight / ((height / 100) ** 2);
        let category = '';

        if (bmi < 18.5) {
            category = 'ผอม';
        } else if (bmi < 23.9) {
            category = 'น้ำหนักปกติ';
        } else if (bmi < 28.9) {
            category = 'ท้วม';
        } else {
            category = 'โรคอ้วน';
        }

        document.getElementById('result_F').innerText = `BMI ของคุณคือ ${bmi.toFixed(2)} (${category})`;
    } else {
        document.getElementById('result_F').innerText = 'กรุณากรอกส่วนสูงและน้ำหนักด้วยค่ะ';
    }
}