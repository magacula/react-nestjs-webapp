import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
// Modules are like a class
@Module({
  imports: [TypeOrmModule.forRoot()],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  // takes dependency injection (passes the Connection object) to test the connection to the database
  constructor(connection: Connection) {
    if (connection.isConnected) {
      console.log('Database connected successfully!');
    }
  }
}
