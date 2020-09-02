# Migration `20200902142044-type-and-number-adjustments`

This migration has been generated by Aaron Sinnott at 9/2/2020, 11:20:44 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `learnr`.`Module` MODIFY `type` varchar(191) NOT NULL,
MODIFY `number` varchar(191) NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200902141615-make-type-and-number-optional..20200902142044-type-and-number-adjustments
--- datamodel.dml
+++ datamodel.dml
@@ -2,18 +2,18 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Module {
-  id          Int     @id @default(autoincrement())
+  id          Int    @id @default(autoincrement())
   title       String
   description String
-  type        String?
-  number      Int?
+  type        String
+  number      String
 }
```

