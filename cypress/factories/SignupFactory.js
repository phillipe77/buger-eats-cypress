var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
                name: `${firstName} ${lastName}` ,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '98999999999',
                address: {
                    postalcode: '65036284',
                    street: 'Avenida dos Franceses',
                    number: '13',
                    details: 'quadra 13',
                    district: 'Santo Antônio',
                    city_state: 'São Luís/MA'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
            }

            return data
        }
    }
