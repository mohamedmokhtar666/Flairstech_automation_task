import { faker } from '@faker-js/faker';

class FakerUtility
{
    name= faker.person.firstName();
    generateNewRecordDetails(){
        const loginDetails={
            userRole:"Admin",
            employeeName:"Orange Test",
            status:"Enabled",
            userName:faker.internet.userName(),
            password:faker.internet.password({ length: 20 }),
        }
        return loginDetails
    }
}
export default FakerUtility