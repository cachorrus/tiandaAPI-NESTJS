import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const usuarioSchema = new mongoose.Schema ({
    correo: { type: String, required: true },
    password: { type: String, required: true }, // , select: false},
});

// If you set the password, be sure to hash it using bcrypt before saving
this.usuarioSchema.pre('save', function(next) {
    if (this.isModified('password')) {
      return bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });
    }
    next();
});