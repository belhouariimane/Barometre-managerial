package fr.univ.angers.info.m2.acdi.bm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EntityScan("fr.univ.angers.info.m2.acdi.bm")
public class BarometreManagerialApplication {

	public static void main(String[] args) {
		SpringApplication.run(BarometreManagerialApplication.class, args);
	}

}
