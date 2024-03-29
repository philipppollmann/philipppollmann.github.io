export function GetAge(): number{
    console.log("Calculate the age");
    const today: Date = new Date();
    const birthDay = new Date('2001-11-05');
    let age: number = today.getFullYear() - birthDay.getFullYear();
    let month: number = today.getMonth() - birthDay.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDay.getDate())) {
        age--;
    }

    return age;
}
