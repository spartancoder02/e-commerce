import User from '../models/user.model.js';
import connect from '../mongodb/mongoose.js';

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username
) => {
    try {
        await connect();
        console.log('email: ', email_addresses[0].email);
        const user = await User.findOneAndUpdate(
            {clerkId: id},
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    avatar: image_url,
                    email: email_addresses[0].email,
                },
            },
            {new: true, upsert: true} // upsert: true means if a user doesn't exist, create the user
        );
        return user;
    } catch (error) {
        console.log('Error creating or updating user: ', error);
    }
};

export const deleteUser = async (id) => {
    try {
        await connect();

        await User.findOneAndDelete({ clerkId: id });
    } catch (error) {
        console.log('Error deleting user: ', error);
    }
}
 