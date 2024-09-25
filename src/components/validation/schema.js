import { z } from 'zod';

const schema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must not exceed 50 characters." })
    .trim()
    .nonempty({ message: "Name is required." }),
  
  email: z.string()
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email is required." }),
  
  programOfStudy: z.string()
    .min(2, { message: "Program of Study must be at least 2 characters long." })
    .max(100, { message: "Program of Study must not exceed 100 characters." })
    .trim()
    .nonempty({ message: "Program of Study is required." }),
  
  phoneNumber: z.string()
    .regex(/^[\+]?[0-9]{10,15}$/, { message: "Phone number must be between 10 and 15 digits and can include a '+'." })
    .nonempty({ message: "Phone number is required." }),
});

export default schema;
