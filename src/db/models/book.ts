import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from './index';
import Author from './author';

interface BookAttributes {
    id?: string;
    title: string;
    numberOfPages: number;
    authorId?: string;
}

interface BookCreationAttributes
    extends Optional<BookAttributes, 'id'> {}

interface BookInstance
    extends Model<BookAttributes, BookCreationAttributes>,
        BookAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

const Book = sequelize.define<BookInstance>(
    'Book',
    {
        id: {
            allowNull: true,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        title: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        numberOfPages: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        authorId: {
            allowNull: true,
            type: DataTypes.UUID,
        },
    }
);

Book.belongsTo(Author, {
    foreignKey: 'authorId',
    as: 'author'
});

export default Book;