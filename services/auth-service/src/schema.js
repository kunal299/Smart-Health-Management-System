import { gql } from "apollo-server";

export const typeDefs = gql`
  enum Role {
    ADMIN
    DOCTOR
    PATIENT
    LAB_TECH
    PHARMACIST
  }

  type User {
    id: ID!
    email: String!
    role: Role
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  type Query {
    healthCheck: String!
  }

  type Mutation {
    register(email: ID!, password: String!, role: Role!): AuthPayload!
    login(email: ID!, password: String!): AuthPayload!
  }
`;
