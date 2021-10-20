import { sequelize } from './index';
import { Model, Optional, DataTypes } from 'sequelize';
import Book from './book';

interface AuthorAttributes {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
};

/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface AuthorCreationAttributes
    extends Optional<AuthorAttributes, 'id'> {}

interface AuthorInstance
    extends Model<AuthorAttributes, AuthorCreationAttributes>,
        AuthorAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Author = sequelize.define<AuthorInstance>(
    'Author',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        firstName: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        lastName: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        email: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
    }
);


Book.belongsTo(Author, {
    foreignKey: 'authorId',
    as: 'author'
});

export default Author;