import React, { Component } from 'react';
import "./registrationComponent/registration.css"


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
        postt.append('surname', this.state.lastName);
        postt.append('email', this.state.email);
        postt.append('phone', this.state.phone);
        postt.append('grad_year', this.state.gradYear);
        postt.append('hobby', this.state.hobby);
        postt.append('reason', this.state.reason);

        fetch(`http://46.101.236.211:1234/application/`, {
            method: 'POST', // or 'PUT'
            body: postt, // data can be `string` or {object}!
        }).then((e)=>{
            if(e.ok) alert(`Success`);
            else alert("Ошибка при отправке", e)
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
        console.log('Last Name was changed', event.target.value);
        this.setState({lastName: event.target.value})
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
        console.log('Department was changed', event.target.value);
        this.setState({gradYear: event.target.value});
    }
    handleExperienceChange(event){
        console.log('Department was changed', event.target.value);
        this.setState({experience: event.target.value});
    }
    handleHobbyChange(event){
        console.log('Department was changed', event.target.value);
        this.setState({hobby: event.target.value});
    }
    handleReasonChange(event){
        console.log('Department was changed', event.target.value);
        this.setState({reason: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input id="name"
                    type = "text"
                    name = "Name"
                    placeholder="Имя"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input id="lastName"
                    type = "text"
                    name = "surname"
                    placeholder="Фамилия"
                    value={this.state.lastName}
                    onChange={this.handleSurnameChange}
                />
                <input id="phone"
                    type="tel"
                    name = "phone"
                    maxLength={18}
                    minLength={10}
                    placeholder="+996123456789"

                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                />
                <input id="email"
                    type="text"
                    name = "Email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <select id ="university" onChange={this.handleUniversityChange} value={this.state.value}>
                </select>

                <select id ="departments" onChange={this.handleDepartmentChange} value={this.state.value}>
                </select>

                <input id="gradYear"
                       type="date"
                       name = "gradYear"
                       placeholder="Год выпуска"
                       value={this.state.gradYear}
                       onChange={this.handleGradYearChange}
                />
                <input id="experience"
                       type="number"
                       name = "experience"
                       placeholder="Стаж"
                       value={this.state.experience}
                       onChange={this.handleExperienceChange}
                />
                <div className="hobby">
                    <div className="text">
                        <p>Расскажите о себе (хобби, спорт)</p>
                    </div>
                    <textarea id="hobby"
                           type="text"
                           name = "hobby"
                           value={this.state.hobby}
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
                              value={this.state.reason}
                              onChange={this.handleReasonChange}
                    />
                </div>








                {/*<input id="reason"*/}

                       {/*type="text"*/}
                       {/*name = "reason"*/}
                       {/*value={this.state.reason}*/}
                       {/*onChange={this.handleReasonChange}*/}
                {/*/>*/}

                <button>Зарегистрироваться</button>







            </form>

        );
    }
}


fetch('http://46.101.236.211:1234/registration/values/', {
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

            // console.log(arr.universities[i].name); // output university name
            departmentParent.appendChild(newItem);
        }

    }));
    else alert("Ошибка при получении данных");
});


export default RegistrationForm;