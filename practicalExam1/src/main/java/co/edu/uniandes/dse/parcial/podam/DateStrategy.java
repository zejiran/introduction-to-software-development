package co.edu.uniandes.dse.parcial.podam;

import java.lang.annotation.Annotation;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import uk.co.jemos.podam.common.AttributeStrategy;

public class DateStrategy implements AttributeStrategy<Date> {
	Random r = new Random();

	public Date getValue() {
		Calendar c = Calendar.getInstance();
		int maxYear = 9999;
		c.set(Calendar.YEAR,
				r.nextInt(maxYear - c.getActualMinimum(Calendar.YEAR) + 1) + c.getActualMinimum(Calendar.YEAR));
		c.set(Calendar.DAY_OF_YEAR,
				r.nextInt(c.getActualMaximum(Calendar.DAY_OF_YEAR) - c.getActualMinimum(Calendar.DAY_OF_YEAR) + 1)
						+ c.getActualMinimum(Calendar.DAY_OF_YEAR));
		c.set(Calendar.HOUR_OF_DAY, c.getActualMinimum(Calendar.HOUR_OF_DAY));
		c.set(Calendar.MINUTE, c.getActualMinimum(Calendar.MINUTE));
		c.set(Calendar.SECOND, c.getActualMinimum(Calendar.SECOND));
		c.set(Calendar.MILLISECOND, c.getActualMinimum(Calendar.MILLISECOND));
		return c.getTime();
	}

	@Override
	public Date getValue(Class<?> attrType, List<Annotation> attrAnnotations) {
		return null;
	}
}
