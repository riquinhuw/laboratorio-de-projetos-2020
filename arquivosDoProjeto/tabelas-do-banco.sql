CREATE TABLE public.alunos (
	user_id serial not null,
	nome varchar(220) NULL,
	"password" varchar(50) NULL,
	telefone varchar(18) NULL,
	username varchar(25) NULL,
	email varchar(100) NULL,
	idade varchar(4) NULL
);

CREATE TABLE public.alunos_treinos (
	interno serial NOT NULL,
	aluno_id int4 NOT NULL,
	treino_id int4 NOT NULL,
	realizado bool NULL DEFAULT false
);
CREATE INDEX alunos_treinos_interno_idx ON public.alunos_treinos USING btree (interno);

CREATE TABLE public.treinos (
	treino_id serial NOT NULL,
	nome varchar(70) NOT NULL,
	tipo varchar(50) NULL,
	descricao varchar(550) NULL
);
CREATE INDEX treinos_treino_id_idx ON public.treinos USING btree (treino_id);
