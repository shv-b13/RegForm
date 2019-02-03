import React, { Component } from 'react';
import "./registration.css"

const Swal = require('sweetalert2');
const url = "http://46.101.236.211:1234/";

class RegistrationForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            university: 1,
            department: 1,
            gradYear: '',
            experience: '',
            hobby: '',
            reason: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUniversityChange = this.handleUniversityChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleGradYearChange = this.handleGradYearChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.handleHobbyChange = this.handleHobbyChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        console.log('Form is submitted. Values: ', this.state);
        const postt = new FormData();
        postt.append('department', this.state.department);
        postt.append('university', this.state.university);
        postt.append('name', this.state.name);
        postt.append('surname', this.state.surname);
        postt.append('email', this.state.email);
        postt.append('phone', this.state.phone);
        postt.append('grad_year', this.state.gradYear);
        postt.append('experience', this.state.experience);
        postt.append('hobby', this.state.hobby);
        postt.append('reason', this.state.reason);

        fetch(url + `application/`, {
            method: 'POST', // or 'PUT'
            body: postt, // data can be `string` or {object}!
        }).then((e)=>{
                if(e.ok) Swal.fire({
                    html: '<p style="font-family: Raleway;\n' +
                    'font-weight: 600;\n' +
                    'font-size: 24px;\n' +
                    'text-align: center;\n' +
                    '\n' +
                    'color: #000000;">Ваша заявка успешно отправлена, вам будет отправлено письмо на ваш электронный адрес, благодарим вас за ожидание!</p>' +
                    '</br><p style="font-size: 24px;">' +
                    'Подпишитесь на нас в социальных сетях </br> FB: fb.com/neobis.clubs </br> Instagram: ig.com/neobis</p></br></br>' +
                    '<button style="font-family: Raleway;font-style: normal;'+
                    'font-weight: 600; line-height: normal;' +
                    'font-size: 100%;\n' +
                    'text-align: center;\n' +
                    'color: #FFFFFF; background: #32B482;\n' +
                    'border-radius: 20px; width: 41%; height: 80%; border: none; min-height: 80px;' +
                    ' max-height: 80px;"><a href = "https://neobis.kg" style="text-decoration: none; ' +
                    'color: #FFFFFF; font-weight: 600;">Вернуться на главную страницу</a></button>',
                    width: 900,
                    height: 500,
                    showConfirmButton: false
                });
            else alert("Ошибка при отправке", e);
        });
    }

    handleEmailChange(event){
        console.log('E-mail was changed', event.target.value);
        this.setState({email: event.target.value})
    }
    handleNameChange(event){
        console.log('Name was changed', event.target.value);
        this.setState({name: event.target.value})
    }
    handlePhoneChange(event){
        console.log('Phone was changed', event.target.value);
        this.setState({phone: event.target.value})
    }
    handleSurnameChange(event){
        console.log('Surname was changed', event.target.value);
        this.setState({surname: event.target.value})
    }
    handleUniversityChange(event){
        console.log('University was changed', event.target.value);
        this.setState({university: event.target.value});
    }
    handleDepartmentChange(event){
        console.log('Department was changed', event.target.value);
        this.setState({department: event.target.value});
    }
    handleGradYearChange(event){
        console.log('Grad year was changed', event.target.value);
        this.setState({gradYear: event.target.value});
    }
    handleExperienceChange(event){
        console.log('Experience was changed', event.target.value);
        this.setState({experience: event.target.value});
    }
    handleHobbyChange(event){
        console.log('Hobby was changed', event.target.value);
        this.setState({hobby: event.target.value});
    }
    handleReasonChange(event){
        console.log('Reason was changed', event.target.value);
        this.setState({reason: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="inputA">
                     <input id="name"
                            type = "text"
                            name = "Name"
                            placeholder="Имя"
                            required
                            pattern="^[A-Za-zА-Яа-яЁё\s]{2,32}$"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                     />
                     <input id="surname"
                            type = "text"
                            name = "Surname"
                            placeholder="Фамилия"
                            required
                            pattern="^[A-Za-zА-Яа-яЁё\s]{2,32}$"
                            value={this.state.surname}
                            onChange={this.handleSurnameChange}
                     />
                     <input id="phone"
                            type="tel"
                            name = "Phone"
                            required
                            pattern="\+[0-9]{12}"
                            placeholder="+996123456789"
                            value={this.state.phone}
                            onChange={this.handlePhoneChange}
                     />
                     <input id="email"
                            type="email"
                            name = "Email"
                            required
                            placeholder="E-mail"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                     />
                     <select id ="university" onChange={this.handleUniversityChange} value={this.state.value}>
                     </select>
                     <select id ="departments" onChange={this.handleDepartmentChange} value={this.state.value}>
                     </select>
                     <input id="gradYear"
                            type="text"
                            name = "Grad Year"
                            required
                            placeholder="Год выпуска (Год-месяц-число)"
                            pattern="[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}"
                            value={this.state.gradYear}
                            onChange={this.handleGradYearChange}
                     />
                     <input id="experience"
                            type="number"
                            name = "Experience"
                            placeholder="Стаж"
                            min={0}
                            max={20}
                            required
                            pattern="[0-9]{,2}"
                            value={this.state.experience}
                            onChange={this.handleExperienceChange}
                     />
                </div>

                <div className="inputB">
                    <div className="hobby">
                        <div className="text">
                            <p>Расскажите о себе (хобби, спорт)</p>
                        </div>
                        <textarea id="hobby"
                                  type="text"
                                  name = "hobby"
                                  required
                                  value={this.state.hobby.trim()}
                                  onChange={this.handleHobbyChange}
                        />
                    </div>
                    <div className="reason">
                        <div className="text">
                            <p>Расскажите почему вы хотите быть частью Neobis</p>
                        </div>
                        <textarea id="reason"
                                  type="text"
                                  name = "reason"
                                  required
                                  value={this.state.reason.trim()}
                                  onChange={this.handleReasonChange}
                        />
                    </div>
                </div>

                <button className="register">Зарегистрироваться</button>

            </form>
        );
    }
}

fetch(url + 'registration/values/', {
    method: 'GET'
}).then((data) => {
    if(data.ok) (data.json().then((arr) => {
        let universParent = document.getElementById('university');
        for (let i in arr.universities){
            let newItem = document.createElement("option");
            newItem.innerHTML = arr.universities[i].name;
            let Id = (parseInt(i, 10));
            newItem.value = Id + 1;

            // console.log(arr.universities[i].name); // output university name
            universParent.appendChild(newItem);
        }
        let departmentParent = document.getElementById('departments');
        for (let i in arr.departments){
            let newItem = document.createElement("option");
            newItem.innerHTML = arr.departments[i].name;
            let Id = (parseInt(i, 10));
            newItem.value = Id + 1;

            // console.log(arr.departments[i].name); // output university name
            departmentParent.appendChild(newItem);
        }

    }));
    else alert("Ошибка при получении данных");
});

export default RegistrationForm;