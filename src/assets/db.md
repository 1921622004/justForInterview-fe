

```sql
CREATE TABLE `just_for_interview`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  `avatar` VARCHAR(45),
  PRIMARY KEY (`id`));

CREATE TABLE `just_for_interview`.`tag` (
  `id` INT NOT NULL,
  `tag_name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  `parent_id` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `just_for_interview`.`answer` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `content` TEXT NULL,
  `markdown_content` TEXT NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  `isDel` INT NOT NULL,
  `thumbup_count` INT NOT NULL,
  `collect_count` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_question_id_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `just_for_interview`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_question_id`
    FOREIGN KEY (`question_id`)
    REFERENCES `just_for_interview`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `just_for_interview`.`user_question`(
  `user_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  `isDel` DATETIME NOT NULL,
  CONSTRAINT `uqfk_uid`
    FOREIGN KEY (`user_id`)
    REFERENCES `just_for_interview`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `uqfk_qid`
    FOREIGN KEY (`qustion_id`)
    REFERENCES `just_for_interview`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
)

CREATE TABLE `just_for_interview`.`follow_question` (
  `user_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  `isDel` INT NOT NULL,
  INDEX `fk_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_question_id_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `fk_uid`
    FOREIGN KEY (`user_id`)
    REFERENCES `just_for_interview`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_qid`
    FOREIGN KEY (`question_id`)
    REFERENCES `just_for_interview`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `just_for_interview`.`user_question` (
  `user_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  `isDel` INT NOT NULL,
  INDEX `uqfk_uid_idx` (`user_id` ASC) VISIBLE,
  INDEX `uqfk_qid_idx` (`question_id` ASC) VISIBLE,
  CONSTRAINT `uqfk_uid`
    FOREIGN KEY (`user_id`)
    REFERENCES `just_for_interview`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `uqfk_qid`
    FOREIGN KEY (`question_id`)
    REFERENCES `just_for_interview`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `just_for_interview`.`collect_answer` (
  `user_id` INT NOT NULL,
  `question_id` INT NOT NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  `isDel` INT NOT NULL,
  INDEX `cafk_uid_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `cafk_uid`
    FOREIGN KEY (`user_id`)
    REFERENCES `just_for_interview`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
  CONSTRAINT `cafk_aid`
    FOREIGN KEY (`user_id`)
    REFERENCES `just_for_interview`.`answer` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
  
CREATE TABLE `just_for_interview`.`follow_tag` (
  `user_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  `isDel` INT NOT NULL,
  INDEX `ftfk_uid_idx` (`tag_id` ASC) VISIBLE,
  CONSTRAINT `ftfk_uid`
    FOREIGN KEY (`tag_id`)
    REFERENCES `just_for_interview`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `ftfk_tid`
    FOREIGN KEY (`tag_id`)
    REFERENCES `just_for_interview`.`tag` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

CREATE TABLE `just_for_interview`.`question_answer` (
  `question_id` INT NOT NULL,
  `answer_id` INT NOT NULL,
  `create_time` DATETIME NOT NULL,
  `modify_time` DATETIME NOT NULL,
  INDEX `qafk_qid_idx` (`question_id` ASC) VISIBLE,
  INDEX `qafk_aid_idx` (`answer_id` ASC) VISIBLE,
  CONSTRAINT `qafk_qid`
    FOREIGN KEY (`question_id`)
    REFERENCES `just_for_interview`.`question` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `qafk_aid`
    FOREIGN KEY (`answer_id`)
    REFERENCES `just_for_interview`.`answer` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


```